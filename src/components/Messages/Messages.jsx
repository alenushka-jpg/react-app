import React from 'react';
import './Messages.css';

const Messages = () => {
  return (
    <div className='messages'>
      <ul className='messages__list-name'>
        <li>
          <p>Jagrit Protap Bill</p>
        </li>
        <li>
          <p>Tamara Kamil</p>
        </li>
        <li>
          <p>Patrica Nixon</p>
        </li>
        <li>
          <p>Sam Boerger</p>
        </li>
        <li>
          <p>Jessica Keol</p>
        </li>
        <li>
          <p>Lieke Jonas</p>
        </li>
      </ul>
      <ul className='messages__list-dialogs'>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Phasellus interdum fermentum ligula sed venenatis. 
          Pellentesque viverra turpis ut mi dignissim, quis consequat ipsum iaculis. 
          In turpis ligula, hendrerit nec sem at, viverra dapibus justo. 
        </li>
        <li>
          Morbi maximus sit amet nisl placerat tristique. Mauris maximus posuere ante ac rhoncus. 
          Fusce pretium pulvinar facilisis. Nunc rhoncus condimentum aliquet. 
          Phasellus elementum erat eget lectus pretium, et tristique dui pharetra.
        </li>
        <li>
          Donec tincidunt aliquet neque, eu suscipit enim consequat nec. 
          Vivamus dapibus mi quis sapien tempor vehicula et in dui. 
          Phasellus feugiat, purus eu mollis fermentum, ipsum magna imperdiet dui, vel condimentum velit ligula eu est. 
        </li>
        <li>
          Maecenas hendrerit fermentum leo eget mollis. In finibus leo in enim lobortis lacinia.
          Nulla placerat a magna id pretium. Aenean vulputate sodales arcu vel aliquam. 
          Phasellus pellentesque erat vel tortor feugiat, nec eleifend dui pellentesque. 
          Integer auctor turpis lectus, nec molestie tortor eleifend vitae. 
          Nullam auctor id risus consequat accumsan.
        </li>
        <li>
          Nulla facilisi. Donec sed odio enim. Integer eu hendrerit neque, eget convallis nibh. 
          Fusce in turpis posuere, dignissim diam malesuada, bibendum tellus. 
          Sed porttitor arcu dui, vitae convallis massa posuere in. Nunc molestie tristique mauris et tincidunt. 
          Aliquam congue turpis ex.
        </li>
        <li>
          Donec pellentesque vitae eros vitae sollicitudin. Nullam sed dui id lorem eleifend faucibus. 
          Nunc pellentesque pellentesque quam id sodales. Donec aliquet justo sit amet turpis dignissim, 
          et ornare risus aliquet. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
        </li>
      </ul>
    </div>
  );
};

export default Messages;