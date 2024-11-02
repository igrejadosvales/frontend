/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source: '/icoffee',
                destination: '/icoffee/drinks',
                permanent: false
            }
        ]
    }
};

export default nextConfig;


