import Breadcumb from '@/components/_ui/breadcumb/Breadcumb';
import Head from 'next/head';
import Image from 'next/image';

export default function Contact() {
    return (
        <>
            <Breadcumb
                currentPage="Contact us"
            />
            <div className='container my-10'>
                <div className='grid grid-col-1'>
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                        <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
                            Just Say Hello!
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        //   rows="4"
                                        required
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-[200px] bg-primary-primary text-white p-2 rounded-full"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src={"/images/common/map.png"}
                    width={716}
                    height={500}
                    objectFit="cover"
                    alt=""
                    className="w-full h-full bg-contain"
                />
            </div>
        </>
    );
}
