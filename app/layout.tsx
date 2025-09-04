import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Deeptimaan Banerjee - AI/ML Engineer, Software Engineer, Data Scientist',
	description:
		'Welcome to my portfolio! I am an AI engineer who thrives on building scalable automations, data pipelines, and ML workflows. I focus on crafting reliable, efficient solutions that make complex problems simple and impactful.',
	keywords: [
		'Machine Learning Engineer',
		'Data Scientist',
		'AI Engineer',
		'Generative AI',
		'Large Language Models (LLMs)',
		'NLP',
		'Computer Vision',
		'MLOps',
		'n8n Automations',
		'Data Pipelines',
		'Cloud Computing',
		'AWS',
		'GCP',
		'Python',
		'PyTorch',
		'TensorFlow',
		'Problem Solving',
		'Scalable Solutions',
		'Automation Workflows',
		'Deeptimaan Banerjee',
	],
	authors: [{ name: 'Deeptimaan Banerjee' }],
	creator: 'Deeptimaan Banerjee',
	openGraph: {
		title: 'Deeptimaan Banerjee - Developer Portfolio',
		description: 'AI engineer building scalable ML workflows, data pipelines, and automations. Explore my projects and approach to creating efficient, impactful solutions.',
		url: 'https://deeptimaanbanerjee.com',
		siteName: 'Deeptimaan Banerjee - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Deeptimaan Banerjee - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	// twitter: {
	// 	card: 'summary_large_image',
	// 	title: 'Deeptimaan Banerjee - Developer',
	// 	description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
	// 	creator: '@yourusername',
	// 	images: ['/og-image.jpg'],
	// },
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
