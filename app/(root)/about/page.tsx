import Breadcumb from "@/components/_ui/breadcumb/Breadcumb";
import Image from "next/image";

const about = [
    {
        title: '100% Trusted Organic Food Store',
        description: 'Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.',
        image: '/images/about/image1.png'
    },
    {
        title: '100% Trusted Organic Food Store',
        description: 'Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat.',
        image: '/images/about/image2.png'
    },
    {
        title: 'We Delivered, You Enjoy Your Order.',
        description: 'Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.',
        image: '/images/about/image3.png'
    }
];

function Page() {
    return (
        <>
            <Breadcumb
                currentPage="About"

            />
            <div className="container mx-auto mt-10">
                {about.map((info, index) => (
                    <section
                        key={index}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-10 my-3  items-center justify-center rounded ${index % 2 === 0 ? '' : 'bg-gray-gray.5'}`}
                    >
                        <div className={`my-3 ${index % 2 === 0 ? '' : 'order-2'} text-center lg:text-left`}>
                            <h1 className="text-5xl font-semibold lg:w-3/4">{info.title}</h1>
                            <p className="text-base text-gray-gray5 font-normal my-3 lg:w-3/4">{info.description}</p>
                        </div>
                        <div>
                            <Image
                                src={info.image}
                                width={716}
                                height={492}
                                objectFit="cover"
                                alt=""
                                className="w-full h-full bg-contain"
                            />
                        </div>
                    </section>
                ))}
            </div>

        </>
    );
}

export default Page;
