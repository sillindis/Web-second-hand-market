import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import "../App.css"

export default function TitlebarBelowImageList() {
  return (
    <div className="itemList">
      <ImageList cols={4} sx={{ width: 1300, height: 1300 }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>id: {item.id}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/rs_quotation_api/bfhuiafl/4e5bbeeb718d49e681151c3245406b69.jpg',
    title: '메타몽인형 팝니다',
    id: 'people1',
  },
  {
    img: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/331046716442870-14e071b3-65fe-4a93-a480-b05eea79cf0c.jpg',
    title: '시바견인형 팜팜',
    id: 'people2',
  },
  {
    img: 'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/8b0d/47fd092f7fab14ccffb73ed4b825a25024278b364888e73b58eb0d0ef662.png',
    title: '안아줘요',
    id: 'people3',
  },
  {
    img: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/2021/07/19/16/7/97544cc7-d1f6-4800-91eb-e1d415e8db19.jpg',
    title: '고양이 인형',
    id: '@nolanissac',
  },
  {
    img: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/93af/42c591b40dffb2632297164e89f6751d76802fbf379251d0d9df9421bf72.jpg',
    title: '의자 팔아요',
    id: '@hjrc33',
  },
  {
    img: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/35bf/3146418a03b70ceb008f4e116447c72a7dba077417e7c11582970e801559.jpg',
    title: '컴퓨터 책상 사실 분?',
    id: '@arwinneil',
  },
  {
    img: 'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/f548/32ece83412f6b98895941d31918c06073b68a197230d0ab9e457dfd55f65.jpg',
    title: '작업용 책상',
    id: '@tjdragotta',
  },
  {
    img: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/c86a/544fc7ec7395a7c6ed871523a13486c63a2aff6fa230a2cbfbccda707810.jpg',
    title: '노트북 판매',
    id: '@katie_wasserman',
  },
  {
    img: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/ee7b/c324abd623852451de6ae4f24c568db17898085573380a5d67dd223e380c.jpg',
    title: '노트북 싸게 팔아요',
    id: '@silverdalex',
  },
  {
    img: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/bdff/369ebcc3f488a5c961a0000469bce2be23fbd28913642c5cd7a85f1f69c0.jpg',
    title: '테블릿PC 판매',
    id: '@shelleypauls',
  },
  {
    img: 'https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/25f3/30cf9993a2636ab6b8835f59274d4e771b3d921368a4e9630810990b75a3.jpg',
    title: '미개봉 테블릿 PC 판매합니다',
    id: '@peterlaster',
  },
  {
    img: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/73fb/3d544c5a4bcf700e0324c6f08ae179608565e2a0d007ffa8448a91b25204.jpg',
    title: '컴퓨터 공부 할 사람?',
    id: '@southside_customs',
  },
];
