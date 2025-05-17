"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}

const Home = (props: Props) => {
    const router = useRouter()
    useEffect(() => {
        const checkToken = localStorage.getItem("userKey")
        if (!checkToken) {
            router.push("/signin")
        }
    }, [])
    return (
        <div>
            <h1>Okairi!</h1>
            <Button variant="ghost">Hello</Button>
        </div>
    )
}

export default Home