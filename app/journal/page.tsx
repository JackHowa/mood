'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Journal() {
  return (
    <>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <h1>My App</h1>
        <SignedIn>
          <UserButton afterSignOutUrl={'/'} />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </header>
      <p>Journal</p>
    </>
  );
}
