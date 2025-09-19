"use client";

import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, useUser, SignOutButton } from "@clerk/nextjs"

export default function NavBar() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) {
        return <p>Loading...</p>;
    }

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/">
                    <Image
                        className="text-xl font-bold text-emerald-700 cursor-pointer"
                        src={"/logo.png"}
                        width={60}
                        height={60}
                        alt="Logo" />
                </Link>
                <div className="space-x-6 flex items-center">
                    <SignedIn>

                        <Link
                            href={"/mealplan"}
                            className="text-gray-700 hover:text-emerald-700 transition-colors"
                        >
                            Meal Plan
                        </Link>
                        {user?.imageUrl ? (
                            <Link href={"/profile"}>
                                <Image
                                    className="rounded-full"
                                    src={user.imageUrl}
                                    alt="Profile Picture"
                                    width={40}
                                    height={40}
                                />
                            </Link>
                        ) : (
                            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                        )}

                        <SignOutButton>
                            <button
                                className="ml-4 px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-600 transition"
                            >
                                Sign Out
                            </button>
                        </SignOutButton>

                    </SignedIn>

                    <SignedOut>

                        <Link
                            className="text-gray-700 hover:text-emerald-500 transition-colors"
                            href={"/"}
                        >
                            Home
                        </Link>
                        <Link
                            className="text-gray-700 hover:text-emerald-500 transition-colors"
                            href={isSignedIn ? "/subscribe" : "/sign-up"}
                        >
                            Subscribe
                        </Link>
                        <Link
                            className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition"
                            href={"/sign-up"}
                        >
                            Sign Up
                        </Link>

                    </SignedOut>
                </div>
            </div>

        </nav >
    );
}