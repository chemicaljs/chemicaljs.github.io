import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export function MobileNav() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon">
					<MenuIcon className="w-4 h-4" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Chemical</SheetTitle>
				</SheetHeader>
				<div class="mt-4 flex flex-col gap-2">
					<a href="/">Home</a>
					<a href="/docs/introduction/get-started">Documentation</a>
					<a href="/showcase">Showcase</a>
					<a href="/credits">Credits</a>
					<a href="https://github.com/chemicaljs/chemical">GitHub</a>
				</div>
			</SheetContent>
		</Sheet>
	);
}
