'use client'

import PageNotFound from '@/app/components/GlobalELements/PageNotFound'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    
    console.error(error)
  }, [error])
 
  return (
    <>
      <PageNotFound/>
    </>
  );
}