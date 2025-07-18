// app/rug-sizes/page.tsx
import React from "react";

const sizeData = [
    {
        category: "Small Rugs",
        sizes: [
            { metric: "60 x 120", imperial: "2' x 4'" },
            { metric: "90 x 150", imperial: "3' x 5'" },
            { metric: "120 x 180", imperial: "4' x 6'" },
        ],
    },
    {
        category: "Medium Rugs",
        sizes: [
            { metric: "150 x 210", imperial: "5' x 7'" },
            { metric: "180 x 270", imperial: "6' x 9'" },
            { metric: "240 x 300", imperial: "8' x 10'" },
        ],
    },
    {
        category: "Large Rugs",
        sizes: [
            { metric: "300 x 400", imperial: "10' x 13'" },
            { metric: "250 x 350", imperial: "8'2\" x 11'6\"" },
        ],
    },
    {
        category: "Runners",
        sizes: [
            { metric: "80 x 200", imperial: "2'7\" x 6'7\"" },
            { metric: "80 x 250", imperial: "2'7\" x 8'2\"" },
            { metric: "80 x 300", imperial: "2'7\" x 9'10\"" },
            { metric: "100 x 300", imperial: "3'3\" x 9'10\"" },
        ],
    },
    {
        category: "Square Rugs",
        sizes: [
            { metric: "150 x 150", imperial: "5' x 5'" },
            { metric: "200 x 200", imperial: "6'7\" x 6'7\"" },
        ],
    },
    {
        category: "Circular Rugs",
        sizes: [
            { metric: "Ø 150", imperial: "Ø 5'" },
            { metric: "Ø 200", imperial: "Ø 6'7\"" },
            { metric: "Ø 250", imperial: "Ø 8'2\"" },
            { metric: "Ø 300", imperial: "Ø 9'10\"" },
        ],
    },
];

export default function RugSizesPage() {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white text-center mb-10">Rug Size Guide</h1>

                {sizeData.map((section) => (
                    <div key={section.category} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4  text-white border-b border-gray-600 pb-1">{section.category}</h2>
                        <table className="w-full border border-gray-600 text-left">
                            <thead className="bg-gray-800">
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-700">Metric (cm)</th>
                                    <th className="py-2 px-4 border-b border-gray-700">Imperial (ft/in)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {section.sizes.map((size, idx) => (
                                    <tr key={idx} className="hover:bg-gray-800">
                                        <td className="py-2 px-4 border-b border-gray-700">{size.metric}</td>
                                        <td className="py-2 px-4 border-b border-gray-700">{size.imperial}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}
