// components/DonateButton.tsx
"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import dynamic from "next/dynamic";
import z from "zod/v3";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false },
);

const schema = z.object({
  email: z.string().email(),
  name: z.string(),
  phone: z.string().min(10),
  amount: z.number().min(100),
});

type FormData = z.infer<typeof schema>;

interface DonateButtonProps {
  label?: string; // customize button text, defaults to "Donate now"
  className?: string; // customize button styles
}

const DonateButton = ({
  label = "Donate now",
  className,
}: DonateButtonProps) => {
  const [open, setOpen] = useState(false);
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";

  const {
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const email = watch("email");
  const amount = watch("amount");

  const componentProps = {
    email,
    amount: amount * 100,
    publicKey,
    currency: "NGN",
    metadata: {
      custom_fields: [
        { display_name: "Email", variable_name: "email", value: email },
        { display_name: "Amount", variable_name: "amount", value: amount },
      ],
    },
    text: "Donate",
    onSuccess: () => {
      setOpen(false);
      reset();
      alert("Thank you for donating");
    },
    onClose: () => alert("Are you sure you want to close"),
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className={
            className ??
            "bg-[#5aaa3a] text-white px-6 py-2 rounded-full text-sm md:text-base font-semibold"
          }
        >
          {label}
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Donate Now</DialogTitle>
          <DialogDescription>
            Fill in your details below to make a donation.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div>
            <Input placeholder="Name" {...register("name")} />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>
          <div>
            <Input placeholder="Email" {...register("email")} />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>
          <div>
            <Input
              placeholder="Amount"
              {...register("amount", { valueAsNumber: true })}
            />
            <p className="text-red-500 text-sm">{errors.amount?.message}</p>
          </div>
          <div>
            <Input placeholder="Phone Number" {...register("phone")} />
            <p className="text-red-500 text-sm">{errors.phone?.message}</p>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          {email && amount !== undefined && (
            <div onClick={() => setOpen(false)}>
              <PaystackButton
                {...componentProps}
                className="bg-[#5aaa3a] text-white rounded-md px-2"
              />
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DonateButton;
