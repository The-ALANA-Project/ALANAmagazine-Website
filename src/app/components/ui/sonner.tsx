"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: 'group toast group-[.toaster]:bg-[#F3F3F3] group-[.toaster]:text-[#262424] group-[.toaster]:border-[#DCC2FE] group-[.toaster]:shadow-lg group-[.toaster]:border-2',
          title: 'group-[.toast]:text-[#262424] group-[.toast]:font-medium group-[.toast]:font-sans !text-[#262424]',
          description: 'group-[.toast]:text-[#262424] group-[.toast]:opacity-100 group-[.toast]:font-sans !text-[#262424]',
          actionButton: 'group-[.toast]:bg-[#262424] group-[.toast]:text-[#F3F3F3] group-[.toast]:font-medium',
          cancelButton: 'group-[.toast]:bg-[#D9D9D9] group-[.toast]:text-[#262424] group-[.toast]:font-medium',
          error: 'group-[.toast]:bg-[#F3F3F3] group-[.toast]:text-[#262424] group-[.toast]:border-[#d4183d] group-[.toast]:border-2',
          success: 'group-[.toast]:bg-[#F3F3F3] group-[.toast]:text-[#262424] group-[.toast]:border-[#DCC2FE] group-[.toast]:border-2',
          warning: 'group-[.toast]:bg-[#F3F3F3] group-[.toast]:text-[#262424] group-[.toast]:border-[#DCC2FE] group-[.toast]:border-2',
          info: 'group-[.toast]:bg-[#F3F3F3] group-[.toast]:text-[#262424] group-[.toast]:border-[#DCC2FE] group-[.toast]:border-2',
          loading: 'group-[.toast]:bg-[#F3F3F3] group-[.toast]:text-[#262424] group-[.toast]:border-[#DCC2FE] group-[.toast]:border-2',
          icon: 'group-[.toast]:text-[#262424] !text-[#262424]',
        },
        style: {
          background: '#F3F3F3',
          color: '#262424',
          border: '2px solid #DCC2FE',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };