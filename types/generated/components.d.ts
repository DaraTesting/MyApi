import type { Schema, Attribute } from '@strapi/strapi';

export interface ContainerConProvinces extends Schema.Component {
  collectionName: 'components_container_con_provinces';
  info: {
    displayName: 'ConProvinces';
  };
  attributes: {
    name: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ContainerHello extends Schema.Component {
  collectionName: 'components_container_hellos';
  info: {
    displayName: 'hello';
  };
  attributes: {
    txt: Attribute.String;
  };
}

export interface ProPro extends Schema.Component {
  collectionName: 'components_pro_pros';
  info: {
    displayName: 'pro';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'container.con-provinces': ContainerConProvinces;
      'container.hello': ContainerHello;
      'pro.pro': ProPro;
    }
  }
}
