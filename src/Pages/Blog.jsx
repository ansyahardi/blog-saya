import React, { Component } from 'react';
import {Footer} from '../Components/organisms';
import {Kartu, KartuFooter} from '../Components/molecules';
import {PlayCircleFilled} from '@ant-design/icons';

export default class TentangSaya extends Component {
  render() {
    return (
      <>
        <div className="konten">
          <h1 className="judul-blog">Programming Language Tranding 2020</h1>
          <img className="image-blog" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="programming" />
          <p className="p-blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus morbi adipiscing tristique tristique morbi dignissim sed viverra tellus. Blandit consectetur non lobortis ultricies accumsan at enim quam. Eget elementum pulvinar nibh odio eleifend cursus diam. Est in sollicitudin tincidunt consectetur massa. In in justo quis enim eget risus gravida lorem mauris. Iaculis arcu consectetur arcu volutpat pharetra eu sit rhoncus cras. Laoreet sit sed amet gravida eget scelerisque feugiat. Dolor nam eget et id integer elit egestas. Scelerisque nulla venenatis dolor neque viverra pellentesque auctor. Cras non malesuada turpis at. Magna dictumst suspendisse pharetra amet felis, turpis. Non dignissim a cursus viverra laoreet quam. Pretium adipiscing elit urna non a at quis ultricies.</p>
          <p className="p-blog">Etiam placerat scelerisque suspendisse nunc maecenas maecenas in. Viverra velit scelerisque auctor tortor massa. Posuere nibh a, fames pharetra sit sit iaculis. Augue nisl ultricies lacus nisi pretium felis eros. Etiam sagittis elit facilisis sed vulputate. Dolor condimentum mattis nisi pellentesque feugiat aliquet nulla amet enim. At maecenas tristique enim pharetra varius. Ornare nunc, orci velit pharetra, sit purus eleifend morbi habitasse. Quam tempus rhoncus nulla vitae at quam at tristique. Ac ac, sollicitudin semper malesuada. Purus vitae faucibus commodo eget quam ultrices sed feugiat. Justo, arcu sit luctus vulputate egestas non neque enim venenatis. Vitae, malesuada vel laoreet vitae etiam euismod magna in eget. Nisl turpis duis eu, ultrices. Sed quisque facilisis pellentesque lorem. Vitae volutpat mi eu purus congue consectetur.</p>
          <div className="image-blog">
            <img  className="" src="https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60" alt="video" />
            <PlayCircleFilled style={{position: "absolute"}} />
          </div>
          <p className="p-blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus morbi adipiscing tristique tristique morbi dignissim sed viverra tellus. Blandit consectetur non lobortis ultricies accumsan at enim quam. Eget elementum pulvinar nibh odio eleifend cursus diam. Est in sollicitudin tincidunt consectetur massa. In in justo quis enim eget risus gravida lorem mauris. Iaculis arcu consectetur arcu volutpat pharetra eu sit rhoncus cras. Laoreet sit sed amet gravida eget scelerisque feugiat. Dolor nam eget et id integer elit egestas. Scelerisque nulla venenatis dolor neque viverra pellentesque auctor. Cras non malesuada turpis at. Magna dictumst suspendisse pharetra amet felis, turpis. Non dignissim a cursus viverra laoreet quam.</p>
        </div>
        <Footer>
          <Kartu/>
          <KartuFooter/>
        </Footer>
      </>
    )
  }
}
