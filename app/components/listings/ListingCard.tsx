"use client";

import { SafeUser } from "@/app/types";
import { Listing, Reservation, User } from "@prisma/client";
import { useRouter } from "next/navigation";

interface ListingCardProps {
  data: Listing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionId,
  actionLabel,
  currentUser,
}) => {
  const router = useRouter();
  return <div>Listing card</div>;
};

export default ListingCard;
