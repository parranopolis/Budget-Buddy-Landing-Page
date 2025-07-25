export default function Pricing() {
    return (
        <section className="my-24" id="pricing">
                <h2 className="text-3xl font-extrabold  text-center">Choose Your Jurney</h2>

                <section className="flex flex-col gap-12 my-12 font-extralight">
                    <div className="border-1 p-8 pl-12 mx-auto max-w-[600px] w-[90%] shadow-xl/40 rounded-2xl ">
                        <h3 className="text-2xl">Basic</h3>
                        <ul className=" my-4 flex flex-col gap-4">
                            <li className="list-disc">Receipt scanning</li>
                            <li className="list-disc">Basic categorization</li>
                            <li className="list-disc">Monthly spending overview</li>
                            <li className="list-disc">Simple budgeting tools</li>
                        </ul>
                        <span className="block mt-12 mb-2 ml-2 underline">$0/month</span>
                        <a href="https://budget-buddy-7fca0.web.app" className="px-10 py-2 text-white rounded-2xl bg-[var(--primary)]">Start Free</a>
                    </div>
                    
                    <div className="border-1 p-8 pl-12 mx-auto max-w-[600px] w-[90%] shadow-xl/40 rounded-2xl ">
                        <h3 className="text-2xl">Plus</h3>
                            <ul className=" my-4 flex flex-col gap-4">
                                <li className="list-disc">Everything in Basic</li>
                                <li className="list-disc">Bank account syncing</li>
                                <li className="list-disc">AI insights & coaching</li>
                                <li className="list-disc">Smart notifications</li>
                                <li className="list-disc">Advanced analytics</li>
                            </ul>
                        <span className="block mt-12 mb-2 ml-2 underline">$9.99/month</span>
                        <a href="https://budget-buddy-7fca0.web.app" className="px-10 py-2 text-white rounded-2xl bg-[var(--primary)]">Get Plus</a>
                    </div>

                    <div className="border-1 p-8 pl-12 mx-auto max-w-[600px] w-[90%] shadow-xl/40 rounded-2xl ">
                        <h3 className="text-2xl">Expert</h3>
                            <ul className=" my-4 flex flex-col gap-4">
                                <li className="list-disc">Everything in Plus</li>
                                <li className="list-disc">Investment tracking</li>
                                <li className="list-disc">Tax preparation help</li>
                                <li className="list-disc">Priority support</li>
                                <li className="list-disc">Custom financial goals</li>
                            </ul>
                                <span className="block mt-12 mb-2 ml-2 underline">$19.99/month</span>

                        <a href="https://budget-buddy-7fca0.web.app" className="px-10 py-2 text-white rounded-2xl bg-[var(--primary)]">Get Expert</a>
                    </div>
                </section>
        </section>
    )
}