import greeter from './greeter';
import * as $ from 'jquery';

$(() => {
    console.log('!', greeter);
    var $b = $(document.body);
    var $g = greeter("World");
    $b.html($g);
});