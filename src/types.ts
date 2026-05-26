/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MountainPackage {
  id: string;
  name: string;
  duration: string;
  price: number;
  isBestSeller?: boolean;
  routeDetails: string;
  included: string[];
  image: string;
}

export interface WildlifePackage {
  id: string;
  name: string;
  price: number;
  isPopular?: boolean;
  parks: string[];
  included: string[];
  image: string;
  features: string[];
}

export interface DayTrip {
  id: string;
  name: string;
  location: string;
  duration: string;
  price: number;
  description: string;
  image: string;
  included: string[];
  bestFor: string;
}

export interface CombinedPackage {
  id: string;
  name: string;
  duration: string;
  price: number;
  isBestSeller?: boolean;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  category: 'wildlife' | 'kilimanjaro' | 'waterfalls' | 'hot springs' | 'safari moments' | 'happy travelers';
  title: string;
  location: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  review: string;
  tourName: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'kilimanjaro' | 'safari' | 'booking';
}

export type BookingType = 'kilimanjaro' | 'safari' | 'daytrip' | 'combined' | 'custom';

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  tourType: BookingType;
  selectedPackage: string;
  travelDate: string;
  numTravelers: number;
  specialRequests: string;
}
