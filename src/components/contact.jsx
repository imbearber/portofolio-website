import { useState } from 'react';
import { useForm } from "react-hook-form"

export default function Contact() {
    const {register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmit = async (data) => {
        try {
            const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                setIsSuccess(true)
                reset();
            } else {
                 alert("Sorry, there was an error sending your message. Please try again later.");
            }

        } catch(error) {
            console.error("Failed to send message:", error);
            alert("Sorry, there was an error sending your message. Please try again later.");
        }
    }

    if (isSuccess) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-left md:text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Thank You</h3>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Your message has been sent successfully. I will respond to your email as soon as possible.
          </p>
          {/* Tombol opsional untuk mengirim pesan lagi */}
          <button 
            onClick={() => setIsSuccess(false)}
            className="mt-6 text-[#F26A5A] font-semibold hover:underline"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

    return (
        <>
            <section id="experience" className="w-full py-20 px-8 md:px-16 lg:px-24 bg-bg-main">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                    <div className="w-full lg:w-1/4 lg:sticky lg:top-32">
                        <h2 className="text-3xl md:text-4xl text-center lg:text-left font-bold text-primary tracking-wide">
                        Contact
                        </h2>
                    </div>
                <div className="flex flex-col w-full lg:w-3/4">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="name" className="text-lg font-medium text-primary">
                                Name
                            </label>
                            <input
                                {...register("name", 
                                    {   required: "Name is required", 
                                        
                                    })}
                                type="text"
                                id="name"
                                name="name"
                                className="border-2 py-2 px-4 rounded-lg border-gray-300 placeholder:text-text-secondary focus:outline-none focus:border-primary"
                                placeholder="Enter your name"
                            />

                            {errors.name && (
                                <span className="text-sm text-red-500 mt-1">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="email" className="text-lg font-medium text-primary">
                                Email
                            </label>
                            <input
                                {
                                    ...register(
                                        "email",
                                        {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Please enter a valid email"
                                            }
                                        }
                                    )
                                }
                                type="email"
                                id="email"
                                name="email"
                                className="border-2 py-2 px-4 rounded-lg border-gray-300 placeholder:text-text-secondary focus:outline-none focus:border-primary"
                                placeholder="Enter your email"
                            />

                            {errors.email && (
                                <span className="text-sm text-red-500 mt-1">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="message" className="text-lg font-medium text-primary">
                                Message
                            </label>
                            <textarea
                                {
                                    ...register(
                                        "message",
                                        {
                                            required: "Message is required",
                                                minLength: {
                                                    value: 10,
                                                    message: "Message must be at least 10 characters"
                                            }
                                        }
                                    )
                                }
                                id="message"
                                type="text"
                                name="message"
                                rows={5}
                                className="border-2 py-2 px-4 rounded-lg border-gray-300 placeholder:text-text-secondary focus:outline-none focus:border-primary"
                                placeholder="Your Message"
                            />

                            {errors.message && (
                                <span className="text-sm text-red-500 mt-1">
                                    {errors.message.message}
                                </span>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#F26A5A] text-white font-semibold px-10 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50"
                            >
                            {isSubmitting ? 'Sending Message...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
            </section>
        </>
    )
}