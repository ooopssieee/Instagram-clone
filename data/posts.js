import {users} from '/home/hassan/Insta/instagram/data/users.js'
export const posts=[{
  uri:require('/home/hassan/Insta/instagram/assets/batman.jpg'),
  user:users[0].user,
  profile_picture:users[0].uri,
  likes:7870,
  caption:'vengeance.',
  comments:[{
    user:'catwoman',
    comment:'Wow! You really are vengeance',
}]},
{
  uri:require('/home/hassan/Insta/instagram/assets/catwoman.png'),
  user:users[1].user,
  profile_picture:users[1].uri,
  likes:21331,
  caption:'im awesome',
  comments:[{
    user:'catwoman',
    comment:'Wow! You really are vengeance',

}]},
{
    uri:require('/home/hassan/Insta/instagram/assets/spiderman.png'),
    user:users[3].user,
    profile_picture:users[3].uri,
    likes:2131231,
    caption:'Your friendly neighbourhood spiderman ;)',

}]