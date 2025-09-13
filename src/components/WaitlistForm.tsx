"use client"
import React from 'react'

export default function WaitlistForm() {
  return (
    <form
      className="mt-6 max-w-md"
      action="#"
      aria-label="Waitlist form"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="email" className="block text-sm font-medium text-brand">
        Email address
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="email"
          name="email"
          type="email"
          required
          className="min-w-0 flex-auto rounded-md border border-brand/20 bg-white px-3 py-2 text-base text-brand shadow-sm placeholder:text-brand/40 focus:ring-2 focus:ring-cta focus:outline-none"
          placeholder="you@example.com"
        />
        <button
          type="submit"
          className="rounded-md bg-cta px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
        >
          Join
        </button>
      </div>
    </form>
  )
}

