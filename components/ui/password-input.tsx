import * as React from "react"

import { cn } from "@/lib/utils"
import { Input } from "./input"
import { EyeIcon, EyeOffIcon } from "lucide-react"

export interface PasswordInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className, type, ...props }, ref) => {

        const [showPassword, setShowPassword] = React.useState(false);

        return (
            <div className="flex items-center gap-2 select-none">
                <Input type={showPassword ? "text" : "password"} {...props} ref={ref} className={className} />
                <span className="cursor-pointer">
                    {showPassword
                        ? <EyeIcon onClick={() => setShowPassword(false)} />
                        : <EyeOffIcon onClick={() => setShowPassword(true)} />
                    }
                </span>
            </div>
        )
    }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }