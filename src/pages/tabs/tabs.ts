import { Component } from '@angular/core';

import { HomePage, IntroPage, SearchPage, MapPage, FriendsPage, ProfilePage } from '../index.pages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = MapPage;
  tab4Root = FriendsPage;
  tab5Root = ProfilePage;
  tab6Root = IntroPage;

  constructor() {

  }
}
