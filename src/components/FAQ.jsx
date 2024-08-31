import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
	return (
		<Accordion className="not-prose" type="single" collapsible>
			<AccordionItem value="item-1">
				<AccordionTrigger>Can I use a custom UV config?</AccordionTrigger>
				<AccordionContent>
					Yes, just serve the files before calling "app.serveChemical()".
				</AccordionContent>
			</AccordionItem>
      <AccordionItem value="item-2">
				<AccordionTrigger>Do I need to set the Baremux transport?</AccordionTrigger>
				<AccordionContent>
					No, Chemical automatically sets transports for you.
				</AccordionContent>
			</AccordionItem>
      <AccordionItem value="item-3">
				<AccordionTrigger>Libcurl vs Epoxy</AccordionTrigger>
				<AccordionContent>
					Libcurl supports Firefox but is slower than Epoxy.
				</AccordionContent>
			</AccordionItem>
      <AccordionItem value="item-4">
				<AccordionTrigger>There are no bare clients.</AccordionTrigger>
				<AccordionContent>
					Shut up.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
