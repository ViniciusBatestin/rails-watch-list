// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap";



// Associations

//     A list has many bookmarks
//     A list has many movies through bookmarks
//     A movie has many bookmarks
//     A bookmark belongs to a movie
//     A bookmark belongs to a list
//     You can’t delete a movie if it is referenced in at least one bookmark.
//     When you delete a list, you should delete all associated bookmarks (but not the movies as they can be referenced in other lists).
