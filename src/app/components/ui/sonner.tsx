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
          toast: 'group toast group-[.toaster]:bg-[#F3F3F3] group-[.toaster]:text-[#262424] group-[.toaster]:border-[#DCC2FE] group-[.toaster]:shadow-lg',
          title: 'group-[.toast]:text-[#262424] group-[.toast]:font-medium group-[.toast]:font-sans',
          description: 'group-[.toast]:text-[#262424] group-[.toast]:opacity-90 group-[.toast]:font-sans',
          actionButton: 'group-[.toast]:bg-[#262424] group-[.toast]:text-[#F3F3F3] group-[.toast]:font-medium',
          cancelButton: 'group-[.toast]:bg-[#D9D9D9] group-[.toast]:text-[#262424] group-[.toast]:font-medium',
          error: 'group-[.toast]:bg-[#F3F3F3] group-[.toast]:text-[#262424] group-[.toast]:border-[#d4183d]',
          success: 'group-[.toast]:bg-[#F3F3F3] group-[.toast]:text-[#262424] group-[.toast]:border-[#DCC2FE]',
          warning: 'group-[.toast]:bg-[#F3F3F3] group-[.toast]:text-[#262424] group-[.toast]:border-[#DCC2FE]',
          info: 'group-[.toast]:bg-[#F3F3F3] group-[.toast]:text-[#262424] group-[.toast]:border-[#DCC2FE]',
          loading: 'group-[.toast]:bg-[#F3F3F3] group-[.toast]:text-[#262424] group-[.toast]:border-[#DCC2FE]',
          icon: 'group-[.toast]:text-[#262424]',
        },
      }}
      style={
        {
          "--normal-bg": "#F3F3F3",
          "--normal-text": "#262424",
          "--normal-border": "#DCC2FE",
          "--success-bg": "#F3F3F3",
          "--success-text": "#262424",
          "--success-border": "#DCC2FE",
          "--error-bg": "#F3F3F3",
          "--error-text": "#262424",
          "--error-border": "#d4183d",
          "--info-bg": "#F3F3F3",
          "--info-text": "#262424",
          "--info-border": "#DCC2FE",
          "--warning-bg": "#F3F3F3",
          "--warning-text": "#262424",
          "--warning-border": "#DCC2FE",
          "--loading-bg": "#F3F3F3",
          "--loading-text": "#262424",
          "--loading-border": "#DCC2FE",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };