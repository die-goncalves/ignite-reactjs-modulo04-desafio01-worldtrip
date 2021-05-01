import { SimpleGrid } from "@chakra-ui/react"
import TravelTemplate from './TravelTemplate';

export default function TravelTypes() {
  return (
    <SimpleGrid marginY="5rem" flex="1" gap="4" minChildWidth={160} alignItems="flex-start">
      <TravelTemplate src="/cocktail.svg" alt="cocktail" text="vida noturna" />
      <TravelTemplate src="/surf.svg" alt="surf" text="praia" />
      <TravelTemplate src="/building.svg" alt="building" text="moderno" />
      <TravelTemplate src="/museum.svg" alt="museum" text="clássico" />
      <TravelTemplate src="/earth.svg" alt="earth" text="e mais..." />
    </SimpleGrid>
  )
}

