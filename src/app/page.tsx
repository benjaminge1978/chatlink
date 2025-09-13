import React from 'react'
import Link from 'next/link'

export default async function Page() {
  return (
    <main id="main" className="min-h-screen">
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-4xl">
          <p className="text-sm font-semibold leading-6 text-cta" aria-label="Brand">
            ChatLink
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-brand sm:text-6xl">
            Simple, paid video calls for creators
          </h1>
          <p className="mt-6 text-lg leading-8 text-brand/80">
            Host time‑boxed 1:1 sessions, charge automatically with Stripe, and share a single link.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="#signup"
              className="rounded-md bg-cta px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
            >
              Get started
            </Link>
            <Link href="#learn" className="text-base font-semibold leading-6 text-brand underline-offset-4 hover:underline">
              Learn more <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="learn" className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-brand">How it works</h2>
        <ul className="mt-4 list-disc pl-5 text-brand/80">
          <li>Create your ChatLink and set your price.</li>
          <li>Share the link with your audience.</li>
          <li>Meet over video; we handle payments automatically.</li>
        </ul>
      </section>

      <section id="signup" className="mx-auto max-w-4xl px-6 pb-24" aria-labelledby="signup-heading">
        <h2 id="signup-heading" className="text-2xl font-semibold text-brand">
          Sign up
        </h2>
        <p className="mt-2 text-brand/80">
          Email/password sign‑up arrives in Story 1.2. For now, join the waitlist.
        </p>
        <form className="mt-6 max-w-md" action="#" onSubmit={(e) => e.preventDefault()} aria-label="Waitlist form">
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
      </section>
    </main>
  )
}
