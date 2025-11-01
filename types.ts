import React from 'react';

export interface PackageItem {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  details: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
  avatarUrl: string;
}