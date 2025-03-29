import type { Config } from 'tailwindcss';
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-1': "url('/home.png')",
        'bg-2':"url('/bg_2.png')",
        'bg-3':"url('/bg_3.png')",
      },
      fontFamily: {
        'ClashGrotesk-Variable': ['ClashGrotesk-Variable', 'sans-serif'],
        'ClashGrotesk-Extralight': ['ClashGrotesk-Extralight', 'sans-serif'],
        'ClashGrotesk-Light': ['ClashGrotesk-Light', 'sans-serif'],
        'ClashGrotesk-Regular': ['ClashGrotesk-Regular', 'sans-serif'],
        'ClashGrotesk-Medium': ['ClashGrotesk-Medium', 'sans-serif'],
        'ClashGrotesk-Semibold': ['ClashGrotesk-Semibold', 'sans-serif'],
        'ClashGrotesk-Bold': ['ClashGrotesk-Bold', 'sans-serif'],
        'archive':['Archivo','sans-serif'],
        'archivo-thin': ['Archivo-Thin', 'sans-serif'],
        'archivo-thin-italic': ['Archivo-ThinItalic', 'sans-serif'],
        'archivo-extra-light': ['Archivo-ExtraLight', 'sans-serif'],
        'archivo-extra-light-italic': ['Archivo-ExtraLightItalic', 'sans-serif'],
        'archivo-light': ['Archivo-Light', 'sans-serif'],
        'archivo-light-italic': ['Archivo-LightItalic', 'sans-serif'],
        'archivo-regular': ['Archivo-Regular', 'sans-serif'],
        'archivo-italic': ['Archivo-Italic', 'sans-serif'],
        'archivo-medium': ['Archivo-Medium', 'sans-serif'],
        'archivo-medium-italic': ['Archivo-MediumItalic', 'sans-serif'],
        'archivo-semi-bold': ['Archivo-SemiBold', 'sans-serif'],
        'archivo-semi-bold-italic': ['Archivo-SemiBoldItalic', 'sans-serif'],
        'archivo-bold': ['Archivo-Bold', 'sans-serif'],
        'archivo-bold-italic': ['Archivo-BoldItalic', 'sans-serif'],
        'archivo-extra-bold': ['Archivo-ExtraBold', 'sans-serif'],
        'archivo-extra-bold-italic': ['Archivo-ExtraBoldItalic', 'sans-serif'],
        'archivo-black': ['Archivo-Black', 'sans-serif'],
        'archivo-black-italic': ['Archivo-BlackItalic', 'sans-serif'],
        'archivo-variable': ['Archivo-Variable', 'sans-serif'],
        'archivo-variable-italic': ['Archivo-VariableItalic', 'sans-serif'],
      },
      screens: {
        'tall': { 'raw': '(min-height: 800px)' },
        
      }, // Closing brace was missing here
    },
  },
  plugins: [nextui()]

};

export default config;