import React from 'react'

export default function Contests(props) {
  return (
    <div className='container' style={{ margin: "34px 0px", marginTop: '100px', color: props.mode === "dark" ? "white" : "black"}}>
       <h2 className='my-4'>List of classical problems</h2>
       <ul class="list-group list-group-flush">
       <li class="list-group-item">
       <div class="row" style={{fontWeight: 'bold', color: 'blue'}}>
        <div class="col">
          ID
        </div>
        <div class="col-4">
          Problems
        </div>
        <div class="col">
          Acc %
        </div>
        <div class="col">
          Difficulty
        </div>
      </div>
      </li>
<br />

      <li class="list-group-item">
       <div class="row">
        <div class="col">
          1
        </div>
        <div class="col-4">
        <a href="/pages">Life, the Universe, and Everything</a>
        </div>
        <div class="col">
          32.79
        </div>
        <div class="col" style={{color: 'green'}}>
          Easy
        </div>
      </div>
      </li>

      <li class="list-group-item">
       <div class="row">
        <div class="col">
          2
        </div>
        <div class="col-4">
        <a href="/pages">Prime Generator  </a>
        </div>
        <div class="col">
          15.79
        </div>
        <div class="col" style={{color: 'orange'}}>
          Medium
        </div>
      </div>
      </li>

      <li class="list-group-item">
       <div class="row">
        <div class="col">
          3
        </div>
        <div class="col-4">
        <a href="/pages">Substring Check (Bug Funny)  </a>
        </div>
        <div class="col">
          8.60
        </div>
        <div class="col" style={{color: 'red'}}>
          Hard
        </div>
      </div>
      </li>

      <li class="list-group-item">
       <div class="row">
        <div class="col">
          4
        </div>
        <div class="col-4">
        <a href="/pages">Transform the Expression </a>
        </div>
        <div class="col">
          49.00
        </div>
        <div class="col" style={{color: 'green'}}>
          Easy
        </div>
      </div>
      </li>

      <li class="list-group-item">
       <div class="row">
        <div class="col">
          5
        </div>
        <div class="col-4">
        <a href="/pages">The Next Palindrome</a>
        </div>
        <div class="col">
         10.88
        </div>
        <div class="col" style={{color: 'orange'}}>
          Medium
        </div>
      </div>
      </li>

      <li class="list-group-item">
       <div class="row">
        <div class="col">
          6
        </div>
        <div class="col-4">
        <a href="/pages">Simple Arithmetics  </a>
        </div>
        <div class="col">
          12.65
        </div>
        <div class="col" style={{color: 'orange'}}>
          Medium
        </div>
      </div>
      </li>

      <li class="list-group-item">
       <div class="row">
        <div class="col">
          7
        </div>
        <div class="col-4">
        <a href="/pages">The Bulk! </a>
        </div>
        <div class="col">
          16.59
        </div>
        <div class="col" style={{color: 'orange'}}>
          Medium
        </div>
      </div>
      </li>

      <li class="list-group-item">
       <div class="row">
        <div class="col">
          8
        </div>
        <div class="col-4">
        <a href="/pages">Complete the Sequence! </a>
        </div>
        <div class="col">
          38.36
        </div>
        <div class="col" style={{color: 'green'}}>
          Easy
        </div>
      </div>
      </li>

      <li class="list-group-item">
       <div class="row">
        <div class="col">
          9
        </div>
        <div class="col-4">
        <a href="/pages">Direct Visibility</a>
        </div>
        <div class="col">
          12.84
        </div>
        <div class="col" style={{color: 'orange'}}>
          Medium
        </div>
      </div>
      </li>

      <li class="list-group-item">
       <div class="row">
        <div class="col">
          10
        </div>
        <div class="col-4">
        <a href="/pages">Complicated Expressions </a>
        </div>
        <div class="col">
          32.17
        </div>
        <div class="col" style={{color: 'green'}}>
          Easy
        </div>
      </div>
      </li>
      </ul>
        
    </div>
  )
}
