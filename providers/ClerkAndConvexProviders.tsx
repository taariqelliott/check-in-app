import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import React from "react";

export default function ClerkAndConvexProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
  const convex = new ConvexReactClient(
    process.env.EXPO_PUBLIC_CONVEX_URL as string
  );

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <ClerkLoaded>{children}</ClerkLoaded>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
