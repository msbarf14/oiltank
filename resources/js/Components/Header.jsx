import { Link } from "@inertiajs/inertia-vue3";
import { Popover, PopoverOverlay, PopoverPanel, PopoverButton, TransitionRoot, TransitionChild } from "@headlessui/vue"
import clsx from 'clsx'

import { ButtonLink } from '@/Components/Button'
import { Container } from '@/Components/Container'
import { Logo } from '@/Components/Logo'

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <PopoverButton className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              class="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              stroke-width={2}
              stroke-linecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                class={clsx('origin-center transition', {
                  'scale-90 opacity-0': open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                class={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open,
                })}
              />
            </svg>
          </PopoverButton>
          <TransitionRoot>
            <TransitionChild
              as="template"
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <PopoverOverlay className="fixed inset-0 bg-slate-300/50" />
            </TransitionChild>
            <TransitionChild
              as="template"
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <PopoverPanel
                as="ul"
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <li>
                  <Link href="#features">
                    <span className="block w-full" onClick={() => close()}>
                      Features
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials">
                    <span className="block w-full" onClick={() => close()}>
                      Testimonials
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#pricing">
                    <span className="block w-full" onClick={() => close()}>
                      Pricing
                    </span>
                  </Link>
                </li>
                <li className="border-t border-slate-300/40 pt-4">
                  <Link href="/login">
                    <span className="block w-full">Sign in</span>
                  </Link>
                </li>
              </PopoverPanel>
            </TransitionChild>
          </TransitionRoot>
        </>
      )}
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 text-sm">
          <ul className="flex items-center">
            <li>
              <Link href="#">
                <a>
                  <span className="sr-only">Home</span>
                  <Logo className="h-10 w-auto" />
                </a>
              </Link>
            </li>
            <li className="ml-12 hidden md:block">
              <Link href="#features">
                <span className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Features
                </span>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#testimonials">
                <span className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Testimonials
                </span>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#pricing">
                <span className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Pricing
                </span>
              </Link>
            </li>
            <li className="ml-auto hidden md:block">
              <Link href="/login">
                <span className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Sign in
                </span>
              </Link>
            </li>
            <li className="ml-auto md:ml-8">
              <ButtonLink href="/register" color="blue">
                <span>
                  Get started<span className="hidden lg:inline"> today</span>
                </span>
              </ButtonLink>
            </li>
            <li className="ml-5 -mr-1 md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
