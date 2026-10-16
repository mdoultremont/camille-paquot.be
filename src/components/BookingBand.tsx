import { phone } from "@/constants";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Shape } from "@/components/Shape";

export function BookingBand() {
  return (
    <Container as="section" className="py-16">
      <div className="relative flex flex-col items-start gap-6 overflow-hidden rounded-[2rem] bg-mustard-light p-8 md:flex-row md:items-center md:justify-between md:p-12">
        <Shape shape="halfMoon" className="absolute -bottom-6 left-1/2 w-40 bg-sky max-md:hidden" />
        <div className="relative">
          <Heading level={2}>Les consultations ouvrent prochainement</Heading>
          <p className="mt-2 max-w-xl text-lg">
            Pour toute question, vous pouvez appeler le{" "}
            <a className="font-bold underline underline-offset-4" href={phone.href}>
              {phone.display}
            </a>
            .
          </p>
        </div>
      </div>
    </Container>
  );
}
