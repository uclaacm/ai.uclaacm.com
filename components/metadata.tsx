import { NextSeo } from "next-seo";
import { OpenGraphMedia } from "next-seo/lib/types";

export default function Metadata({
	title,
	description,
	images,
}: {
	title: string;
	description?: string;
	images?: OpenGraphMedia[];
}) {
	return (
		<NextSeo
			title={`${title} @ ACM AI at UCLA`}
			description={description ?? "Leon puts the L in Machine Leonerning"}
			openGraph={{
				images: images ?? [
					{
						url: "https://uclaacm.github.io/ai.uclaacm.com/logos/ai_motif_applied_2.png",
						width: 990,
						height: 555,
						alt: "ACM AI logo",
					},
				],
				site_name: "ACM AI at UCLA",
			}}
			twitter={{
				cardType: "summary_large_image",
			}}
		/>
	);
}