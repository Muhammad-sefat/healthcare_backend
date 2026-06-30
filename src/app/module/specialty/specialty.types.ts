export type CreateSpecialtyPayload = {
  title: string;
  description?: string | null;
  image?: string | null;
  adminId: string;
};
