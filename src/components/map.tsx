import React from 'react';
import { Props } from './type/type';

interface Prop {
  post: Props;
}

export default function Post({ post }: Prop) {
  return (
    <div>
      <p>{post.category.name} voici mon nom</p>;<p>{post.title}</p>
    </div>
  );
}
