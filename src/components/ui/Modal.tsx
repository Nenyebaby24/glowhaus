"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"

interface ModalProps {
  trigger: React.ReactNode
  children: React.ReactNode
}

export function Modal({ trigger, children }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 bg-[#FDF8EE] rounded-2xl shadow-xl border-t-4 border-[#D4AF37] p-6">
          <Dialog.Close className="absolute top-4 right-4 text-black">
            <X size={20} />
          </Dialog.Close>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}