<script lang="ts">
	let getResponse = $state<string | null>(null);
	let postInput = $state('');
	let postResponse = $state<string | null>(null);
	let isLoading = $state(false);

	async function testGet() {
		isLoading = true;
		try {
			const res = await fetch('/api/welcome');
			const data = await res.json();
			getResponse = data.message;
		} catch (err) {
			getResponse = 'Error fetching data from edge server.';
		} finally {
			isLoading = false;
		}
	}

	async function testPost() {
		if (!postInput.trim()) return;
		
		isLoading = true;
		try {
			const res = await fetch('/api/welcome', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name: postInput })
			});
			const data = await res.json();
			postResponse = data.message || data.error;
		} catch (err) {
			postResponse = 'Error posting data to edge server.';
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="card shadow-xl border border-[var(--border)] w-full max-w-3xl mx-auto my-12 overflow-hidden">
	<div class="bg-gradient-to-r from-[color-mix(in_oklch,var(--color-primary)_18%,transparent)] to-[color-mix(in_oklch,var(--color-secondary)_18%,transparent)] p-6 border-b border-[var(--border)]">
		<h2 class="card-title text-2xl font-bold">⚡ Full-Stack API Integrated</h2>
		<p class="text-[color-mix(in_oklch,var(--color-base-content)_78%,transparent)] mt-2">
			These requests hit the <code>/api/welcome</code> endpoint. BYOB's AI now builds your frontend UI <strong>and</strong> your backend serverless routes.
		</p>
	</div>
	
	<div class="card-body grid grid-cols-1 md:grid-cols-2 gap-8">
		<!-- GET Welcome -->
		<div class="space-y-4">
			<h3 class="font-semibold text-lg border-b border-[var(--border)] pb-2 text-[var(--color-primary)]">1. Test GET Route</h3>
			<button class="btn btn-outline btn-primary w-full" onclick={testGet} disabled={isLoading}>
				Fetch Server Time
			</button>
			
			{#if getResponse}
				<div class="alert alert-success text-sm shadow-sm mt-4">
					<span>{getResponse}</span>
				</div>
			{/if}
		</div>

		<!-- POST Welcome -->
		<div class="space-y-4">
			<h3 class="font-semibold text-lg border-b border-[var(--border)] pb-2 text-[var(--color-secondary)]">2. Test POST Route</h3>
			<div class="join w-full">
				<input 
					type="text" 
					bind:value={postInput} 
					placeholder="Enter your name..." 
					class="input input-bordered join-item w-full"
					onkeydown={(e) => e.key === 'Enter' && testPost()}
				/>
				<button class="btn btn-secondary join-item" onclick={testPost} disabled={isLoading || !postInput}>
					Send
				</button>
			</div>
			
			{#if postResponse}
				<div class="alert alert-info text-sm shadow-sm mt-4">
					<span>{postResponse}</span>
				</div>
			{/if}
		</div>
	</div>
</div>
