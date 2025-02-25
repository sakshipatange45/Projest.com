// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getFirestore, collection, addDoc, serverTimestamp, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyAlTAqpLf8tNqiEbN98lWdP5fxFAPcHVys",
  authDomain: "social-clone-page.firebaseapp.com",
  databaseURL: "https://social-clone-page-default-rtdb.firebaseio.com",
  projectId: "social-clone-page",
  storageBucket: "social-clone-page.firebasestorage.app",
  messagingSenderId: "447631338311",
  appId: "1:447631338311:web:c8b565d91d7d6d545f3a62",
  measurementId: "G-8TFTZ8QN42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

let currentUser = null;

// Auth State Listener
onAuthStateChanged(auth, user => {
    if (user) {
        currentUser = user;
        document.getElementById('post-form').style.display = 'block';
        document.getElementById('logout-btn').style.display = 'inline-block';
        document.getElementById('members').style.display = 'block';
        loadMembers();
        loadPosts();
    } else {
        currentUser = null;
        document.getElementById('post-form').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'none';
        document.getElementById('members').style.display = 'none';
        document.getElementById('feed').innerHTML = '';
    }
});

// Login
document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then(() => alert('Login successful!'))
        .catch(error => alert(error.message));
});

// Signup
document.getElementById('signup-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then(() => alert('Signup successful!'))
        .catch(error => alert(error.message));
});

// Logout
document.getElementById('logout-btn').addEventListener('click', () => {
    signOut(auth)
        .then(() => alert('Logged out successfully.'))
        .catch(error => alert(error.message));
});

// Load Members
function loadMembers() {
    const membersList = document.getElementById('members-list');
    membersList.innerHTML = '';
    onSnapshot(collection(db, 'users'), snapshot => {
        snapshot.forEach(doc => {
            const user = doc.data();
            const member = document.createElement('div');
            member.classList.add('member');
            member.innerHTML = `
                <img src="https://via.placeholder.com/40" alt="${user.email}">
                <span>${user.email}</span>
            `;
            membersList.appendChild(member);
        });
    });
}

// Load Posts
function loadPosts() {
    const feed = document.getElementById('feed');
    feed.innerHTML = '';
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    onSnapshot(q, snapshot => {
        snapshot.forEach(doc => {
            const post = doc.data();
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <p>${post.content}</p>
                ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
                <div class="post-actions">
                    <button><i class="fas fa-heart"></i> Like</button>
                    <button><i class="fas fa-comment"></i> Comment</button>
                </div>
            `;
            feed.appendChild(postElement);
        });
    });
}

// Post Functionality
document.getElementById('post-btn').addEventListener('click', () => {
    if (!currentUser) {
        alert('Please login to post.');
        return;
    }

    const postContent = document.getElementById('post-content').value;
    const imageUpload = document.getElementById('image-upload');

    if (postContent.trim() === '' && imageUpload.files.length === 0) {
        alert('Please write something or upload an image before posting.');
        return;
    }

    const post = {
        content: postContent,
        user: currentUser.email,
        timestamp: serverTimestamp()
    };

    if (imageUpload.files.length > 0) {
        const file = imageUpload.files[0];
        const fileRef = storageRef(storage, 'posts/' + file.name);
        uploadBytes(fileRef, file).then(snapshot => {
            getDownloadURL(snapshot.ref).then(downloadURL => {
                post.image = downloadURL;
                addPost(post);
            });
        });
    } else {
        addPost(post);
    }
});

function addPost(post) {
    addDoc(collection(db, 'posts'), post)
        .then(() => {
            document.getElementById('post-content').value = '';
            document.getElementById('image-upload').value = '';
            document.getElementById('image-preview').innerHTML = '';
        })
        .catch(error => alert(error.message));
}