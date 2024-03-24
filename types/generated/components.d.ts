import type { Schema, Attribute } from '@strapi/strapi';

export interface GalleryGallery extends Schema.Component {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'dashboard';
  };
  attributes: {
    Title: Attribute.String;
    Pictures: Attribute.Media;
  };
}

export interface GalleryTextBlock extends Schema.Component {
  collectionName: 'components_gallery_text_blocks';
  info: {
    displayName: 'Text-block';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'gallery.gallery': GalleryGallery;
      'gallery.text-block': GalleryTextBlock;
    }
  }
}
