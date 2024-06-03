"use client"

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/ui/password-input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon, PersonStandingIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"

const formSchema = z.object({
    email: z.string().email(),
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    numberOfEmployees: z.coerce.number().optional(),
    dob: z.date().refine((date) => {
        const today = new Date();
        const eighteenYearsAgo = new Date(
            today.getFullYear() - 18,
            today.getMonth(),
            today.getDate()
        )

        return date < eighteenYearsAgo;

    }, "You must be at least 18 years and above"),
    password: z
        .string()
        .min(8, "Password must contain at least 8 characters")
        .refine((password) => {
            return /^(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/.test(password);
        }, "Password must contain at least 1 special character and 1 uppercase letter"),
    passwordConfirm: z.string()

}).superRefine((data, ctx) => {
    if (data.accountType === "company" && !data.companyName) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["companyName"],
            message: "Company name is required"
        })
    }

    if (data.accountType === "company" && (!data.numberOfEmployees || data.numberOfEmployees <= 0)) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["numberOfEmployees"],
            message: "Number of employees is required / cannot be negative"
        })
    }

    if (data.password !== data.passwordConfirm) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["passwordConfirm"],
            message: "Passwords do not match"
        })
    }

})

const SigupPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        }
    });

    const handleSubmit = () => {
        console.log("Application successful. Form submitted.")
    }

    const accountType = form.watch("accountType")

    const dobFromDate = new Date();
    dobFromDate.setFullYear(dobFromDate.getFullYear() - 120)

    return (
        <>
            <PersonStandingIcon size={50} />
            <Card className='w-full max-w-md'>
                <CardHeader>
                    <CardTitle>
                        Sign-up
                    </CardTitle>
                    <CardDescription>
                        Sign up for a new SupportMe account
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
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="accountType" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Account Type
                                    </FormLabel>
                                    <Select onValueChange={field.onChange}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select an account type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value='personal'>Personal</SelectItem>
                                            <SelectItem value='company'>Company</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            {accountType === "company" &&
                                <>
                                    <FormField control={form.control} name="companyName" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Company Name
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder='Company Name' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    <FormField control={form.control} name="numberOfEmployees" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Employees
                                            </FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder='No. of Employees' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                </>
                            }
                            <FormField control={form.control} name="dob" render={({ field }) => (
                                <FormItem className='flex flex-col pt-2'>
                                    <FormLabel>
                                        Date of Birth
                                    </FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild >
                                            <FormControl>
                                                <Button variant="outline" className='normal-case flex justify-between pr-1'>
                                                    {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                                    <CalendarIcon />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent align='start' className='w-auto p-0'>
                                            <Calendar
                                                mode="single"
                                                defaultMonth={field.value}
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                fixedWeeks
                                                weekStartsOn={1}
                                                fromDate={dobFromDate}
                                                toDate={new Date()}
                                                captionLayout='dropdown-buttons'
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="password" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder='........' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="passwordConfirm" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Confirm Password
                                    </FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder='........' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                            <Button type="submit">Sign up</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className='justify-between'>
                    <small>Already have an account?</small>
                    <Button asChild variant="outline" size="sm" className='cursor-pointer'><Link href="/login"><small>Login</small></Link></Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default SigupPage