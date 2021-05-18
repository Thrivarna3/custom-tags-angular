import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-inputs',
  templateUrl: './tag-inputs.component.html',
  styleUrls: ['./tag-inputs.component.css']
})
export class TagInputsComponent implements OnInit {
  tagContainer;
  input;
  // tags = [];
  @Input()
  tags = [];
  constructor() { }

  ngOnInit() {
    this.tagContainer = document.querySelector('.tags-input');
    this.input = document.querySelector('.tags-input input');
    this.input.focus();

    document.addEventListener('click', (e: any) => {
      console.log('u', e);
      if (e.target.tagName === 'I') {
        const tagLabel = e.target.getAttribute('data-item');
        console.log('tags', this.tags);
        console.log('taglabel', tagLabel);
        const index = this.tags.indexOf(tagLabel);
        console.log('index', index);
        this.tags = [...this.tags.slice(0, index), ...this.tags.slice(index+1)];
        console.log('tags', this.tags);
        this.addTags();    
      }
    })
    this.input.addEventListener('keyup', (event) => {
      console.log('e', event);
      const keyCode = event.keyCode ? event.keyCode : event.which;
      
      if (keyCode === 13 || keyCode === 188) {
          console.log('event value', event.target.value);
          const value=event.target.value.split(',');
          this.tags.push(value[0]);  
  
          this.addTags();
          this.input.value = '';
      }
    });

  }

  createTag(enteredInputValue) {
    let div;
    div = document.createElement('div');
    div.setAttribute('class', 'tag');
    // div.class = 'tag';
    div.style.display = 'inline-block';
    div.style.padding = '7px';
    div.style.margin = '5px';
    div.style.border = '1px black';
    div.style.backgroundColor = '#E5E4E2';
    div.style.borderRadius = '13px'

    
    const span = document.createElement('i');
    span.innerHTML = 'X';
    span.style.marginLeft = '5px';
    span.style.color = 'red';
    span.style.textAlign = 'center';
    span.style.cursor = 'pointer';
    
    
    div.innerHTML = enteredInputValue;
    span.setAttribute('data-item', enteredInputValue);
    div.appendChild(span);
    console.log('22222222', div);
    return div;
  }

  addTags() {
      this.clearTags();
      console.log('tags111', this.tags);
      this.tags.slice().reverse().forEach(tag => {
          this.tagContainer.prepend(this.createTag(tag));
      });
  }

  clearTags() {
    document.querySelectorAll('.tag').forEach(tag => {
      tag.parentElement.removeChild(tag);
    });
  }
  

}
