import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage= 0;
  images = [
    {
    title: 'At the Beach',
    url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

},

{
  title: 'Nice Castle',
  url: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z2VybWFueSUyMGNhc3RsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

},
{
  title: 'Island',
  url: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fG1vb25saWdodCUyMGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

},
{
  title: 'House in Snow',
  url: 'https://images.unsplash.com/photo-1520356496838-3d9184d470f4?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8ODc1MTIxfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

},
{
  title: 'Sailing',
  url: 'https://images.unsplash.com/photo-1511316695145-4992006ffddb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXBzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

},
{
  title: 'Fog',
  url: 'https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

},
{
  title: 'lion',
  url: 'https://images.unsplash.com/photo-1593507105697-ec89b79ca16e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fGxpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'

},
{
  title: 'Eagle',
  url: 'https://images.unsplash.com/photo-1625978411908-27f6dc34430f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGZhbGNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'

},

];

checkWindowIndex(index: number) {
  return Math.abs(this.currentPage - index) < 5;
}

}
