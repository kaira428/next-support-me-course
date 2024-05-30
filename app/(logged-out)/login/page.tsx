"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { PersonStandingIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"

const formSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

const handleSubmit = () => {
    console.log("Verification successful. Form submitted.")
}

const LoginPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    return (
        <>
            <PersonStandingIcon size={50} />
            <Card className='w-full max-w-md'>
                <CardHeader>
                    <CardTitle>
                        Login
                    </CardTitle>
                    <CardDescription>
                        Login to your SupportMe account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handleSubmit)}>
                            <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder='john@doe.com' {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is the email address that you used for signup
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="password" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder='Password' type="password" {...field} />
                                    </FormControl>
                                    <FormDescription>

                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <Button type="submit">Login</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className='justify-between'>
                    <small>{`Don't have an account?`}</small>
                    <Button asChild variant="outline" size="sm" className='cursor-pointer'><Link href="/sign-up"><small>Sign up</small></Link></Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default LoginPage