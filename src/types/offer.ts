export default interface Offer {
    id: number;
    title: string;
    need: string;
    offer: string;
    // Добавьте другие поля, которые приходят с API
    createdAt?: string;
    updatedAt?: string;
    userId?: number;
}