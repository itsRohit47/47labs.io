/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    return (
        <motion.div
            className="max-w-3xl mx-auto py-16 px-4"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}
        >
            <a href='/' className="text-white/50 hover:text-white/100 mb-4 text-sm">
                Home
            </a>
            <h1 className="text-2xl lg:text-4xl font-thin mb-8">Privacy Policy - 47Labs.io</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-thin mb-4">Introduction</h2>
                <p className="text-gray-300">
                    47labs.io is a personal project hub. We value your privacy and aim to be transparent about any data we collect and how we use it.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-thin mb-4">Data Collection & Usage</h2>
                <p className="text-gray-300">
                    Currently, we only collect email addresses through our waitlist form. These emails are used exclusively for sending updates about 47labs.io projects and will never be sold or shared with third parties.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-thin mb-4">Data Storage & Security</h2>
                <p className="text-gray-300">
                    Email addresses are stored securely using industry-standard encryption. We retain this information until you request its deletion. We implement appropriate technical measures to protect your data from unauthorized access.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-thin mb-4">Third-Party Services</h2>
                <p className="text-gray-300">
                    We use Airtable for data storage. All third-party services we utilize adhere to GDPR and other relevant privacy regulations.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-thin mb-4">User Rights & Contact</h2>
                <p className="text-gray-300">
                    You have the right to request access to your data or its deletion. For any privacy-related concerns or questions, please contact us at{' '}
                    <a href="mailto:privacy@47labs.io" className="text-blue-500 hover:underline">
                        privacy@47labs.io
                    </a>
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-thin mb-4">Changes to the Policy</h2>
                <p className="text-gray-300">
                    We may update this privacy policy from time to time. If we make significant changes that affect how we handle your data, we will notify you via email.
                </p>
            </section>

            <footer className="text-sm text-gray-300">
                Last updated: {new Date().toLocaleDateString()}
            </footer>
        </motion.div>
    );
};
