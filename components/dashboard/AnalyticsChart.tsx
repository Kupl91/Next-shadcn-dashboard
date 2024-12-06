'use client'

import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import data from "@/data/analytics"

const AnalyticsChart = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Analytics for this year</CardTitle>
                <CardDescription>Views per month</CardDescription>
        </CardHeader>
        <CardContent>
            <div style={{ height: 300, width: '100%' }}>
                <ResponsiveContainer>
                    <LineChart width={1100} height={300} data={data}>
                        <Line  type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc"/>
                        <XAxis dataKey="name" />
                        <YAxis />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </CardContent>
    </Card>
  )
}

export default AnalyticsChart