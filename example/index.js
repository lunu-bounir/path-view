const view = document.querySelector('path-view');
view.build([
  {title: '1 - This is a Long Text', checked: true},
  {
    title: '2 - This is a Long Text',
    checked: true,
    extra: {
      comment: 'You can have extra properties'
    }
  },
  {title: '3 - This is a Long Text'},
  {title: '4 - This is a Long Text'},
  {title: '5 - This is a Long Text'},
  {title: '6 - This is a Long Text'},
  {title: '7 - This is a Long Text'},
  {title: '8 - This is a Long Text'},
  {title: '9 - This is a Long Text'},
  {title: '10 - This is a Long Text'},
  {title: '11 - This is a Long Text'},
  {title: '12 - This is a Long Text'}
]);
view.addEventListener('change', e => {
  document.getElementById('counter').textContent = e.target.value.title;
  document.getElementById('content').value = JSON.stringify(e.target.value, undefined, '  ');
});
view.dispatchEvent(new Event('change'));
