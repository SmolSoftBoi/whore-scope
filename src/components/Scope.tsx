import React from 'react';
import { Block, FeaturedList } from '@smolpack/react-bootstrap-extensions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import type { Data } from './../data.json';

interface ScopeProps {
  title: string;
  data: Data;
}

function Scope(props: ScopeProps) {
  return (
    <>
      <Block.Title as="h2">{props.title}</Block.Title>
      <FeaturedList>
        <FeaturedList.Item>
          <FeaturedList.Icon>
            <FontAwesomeIcon className="icon" icon={solid("heart")} beat={true} />
          </FeaturedList.Icon>
          <p><strong>Love:</strong> {props.data.love}</p>
        </FeaturedList.Item>
        <FeaturedList.Item>
          <FeaturedList.Icon>
            <FontAwesomeIcon className="icon" icon={solid("eggplant")} spin={true} />
          </FeaturedList.Icon>
          <p><strong>Lust:</strong> {props.data.lust}</p>
        </FeaturedList.Item>
        <FeaturedList.Item>
          <FeaturedList.Icon>
            <FontAwesomeIcon className="icon" icon={solid("comments")} shake={true} />
          </FeaturedList.Icon>
          <p><strong>Friendships:</strong> {props.data.friendships}</p>
        </FeaturedList.Item>
        <FeaturedList.Item>
          <FeaturedList.Icon>
            <FontAwesomeIcon className="icon" icon={solid("sack-dollar")} bounce={true} />
          </FeaturedList.Icon>
          <p><strong>Work:</strong> {props.data.work}</p>
        </FeaturedList.Item>
      </FeaturedList>
    </>
  );
}

export default Scope;
